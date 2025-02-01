import { Request, Response } from "express";
import { firestoreService } from "../services/firestore";
import { aiService } from "../services/ai";
import { storageService } from "../services/storage";

export async function handleChatWithContext(req: Request, res: Response) {
  try {
    const userId = req.user?.uid;
    if (!userId) {
      res.status(401).send('Unauthorized');
      return;
    }

    const { projectId, stepId, message } = req.body;
    if (!projectId || !stepId || !message) {
      res.status(400).send('Missing required parameters');
      return;
    }

    const step = await firestoreService.getProjectStep(userId, projectId, stepId);
    if (!step) {
      res.status(404).send('Step not found');
      return;
    }

    // システムプロンプトの構築
    const prompt = step.templateStepId;
    
    // 参照ドキュメントの内容を追加
    const contextDocs = step.documents
      .filter(doc => doc.isEnabled)
      .map(doc => {
        const refDoc = step.uploadedDocuments.find(ref => ref.id === doc.id);
        return refDoc ? `Document: ${refDoc.title}\n${refDoc.content}` : '';
      })
      .join('\n\n');

    // ストリーミングレスポンスの設定
    storageService.setStreamingResponse(res);

    // AIによる応答生成
    await aiService.generateContextResponse(prompt, contextDocs, message, res);
    res.end();

  } catch (error) {
    console.error('Error in handleChatWithContext:', error);
    res.status(500).send('Internal server error');
  }
}

export async function handleGenerateExampleResponse(req: Request, res: Response) {
  try {
    const userId = req.user?.uid;
    if (!userId) {
      res.status(401).send('Unauthorized');
      return;
    }

    const { projectId, stepId } = req.body;
    if (!projectId || !stepId) {
      res.status(400).send('Missing required parameters');
      return;
    }

    const step = await firestoreService.getProjectStep(userId, projectId, stepId);
    if (!step) {
      res.status(404).send('Step not found');
      return;
    }

    const project = await firestoreService.getProject(userId, projectId);
    if (!project) {
      res.status(404).send('Project not found');
      return;
    }

    const template = await firestoreService.getProjectTemplate(userId, project);
    if (!template) {
      res.status(404).send('Template not found');
      return;
    }

    const templateStep = template.steps?.find(s => s.id === step?.templateStepId);
    if (!templateStep?.userChoicePromptTemplate) {
      res.status(400).send('Template step or user choice prompt not found');
      return;
    }

    const recentConversations = Array.isArray(step?.conversations) && step.conversations.length > 0
      ? step.conversations
          .slice(-5)
          .map(conv => `${conv.role}: ${conv.content}`)
          .join('\n')
      : '';

    const examples = await aiService.generateExampleResponses(
      templateStep.systemPrompt,
      recentConversations
    );

    if (!examples) {
      res.status(500).send('Failed to generate examples');
      return;
    }

    res.json(examples);

  } catch (error) {
    console.error('Error in handleGenerateExampleResponse:', error);
    if (error instanceof Error) {
      res.status(500).send(`Internal server error: ${error.message}`);
    } else {
      res.status(500).send('Internal server error');
    }
  }
}

export async function handleGenerateArtifact(req: Request, res: Response) {
  try {
    const userId = req.user?.uid;
    if (!userId) {
      res.status(401).send('Unauthorized');
      return;
    }

    const { projectId, stepId } = req.body;
    if (!projectId || !stepId) {
      res.status(400).send('Missing required parameters');
      return;
    }

    const step = await firestoreService.getProjectStep(userId, projectId, stepId);
    if (!step) {
      res.status(404).send('Step not found');
      return;
    }

    const project = await firestoreService.getProject(userId, projectId);
    if (!project) {
      res.status(404).send('Project not found');
      return;
    }

    const template = await firestoreService.getProjectTemplate(userId, project);
    if (!template) {
      res.status(404).send('Template not found');
      return;
    }

    const templateStep = template.steps?.find(s => s.id === step?.templateStepId);
    if (!templateStep?.userChoicePromptTemplate) {
      res.status(400).send('Template step or user choice prompt not found');
      return;
    }

    const artifact = await aiService.generateArtifact(
      templateStep.artifactGenerationPrompt,
      step.conversations
    );

    if (!artifact) {
      res.status(500).send('Failed to generate artifact');
      return;
    }

    const updated = await firestoreService.updateStepArtifact(
      userId,
      projectId,
      stepId,
      artifact
    );

    if (!updated) {
      res.status(500).send('Failed to save artifact');
      return;
    }

    res.json(artifact);

  } catch (error) {
    console.error('Error in handleGenerateArtifact:', error);
    res.status(500).send('Internal server error');
  }
}