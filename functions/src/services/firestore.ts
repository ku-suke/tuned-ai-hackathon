import * as admin from "firebase-admin";
import type {
  Project,
  ProjectStep,
  ProjectTemplate,
  PublishedProjectTemplate,
  Conversation,
  ReferenceDocument
} from "../types/firestore";

export class FirestoreService {
  async getProjectStep(userId: string, projectId: string, stepId: string): Promise<ProjectStep | null> {
    try {
      const stepDoc = await admin.firestore()
        .collection('users')
        .doc(userId)
        .collection('projects')
        .doc(projectId)
        .collection('steps')
        .doc(stepId)
        .get();

      if (!stepDoc.exists) return null;

      const data = stepDoc.data();
      if (!data) return null;

      // 型安全な変換処理
      const conversations = Array.isArray(data.conversations) 
        ? data.conversations.map((conv): Conversation => ({
            id: conv.id || '',
            role: conv.role || 'user',
            content: conv.content || '',
            createdAt: conv.createdAt?.toDate() || new Date()
          }))
        : [];

      // documents配列の安全な変換
      const documents = Array.isArray(data.documents) 
        ? data.documents 
        : [];

      // uploadedDocuments配列の安全な変換
      const uploadedDocuments = Array.isArray(data.uploadedDocuments) 
        ? data.uploadedDocuments 
        : [];

      return {
        ...data,
        id: stepDoc.id,
        conversations,
        documents,
        uploadedDocuments
      } as ProjectStep;

    } catch (error) {
      console.error('Error in getProjectStep:', error);
      return null;
    }
  }

  async getProjectTemplate(userId: string, project: Project): Promise<ProjectTemplate | PublishedProjectTemplate | null> {
    try {
      const templateRef = project.templateType === 'private'
        ? admin.firestore()
            .collection('users')
            .doc(userId)
            .collection('projectTemplates')
            .doc(project.templateId)
        : admin.firestore()
            .collection('publishedProjectTemplates')
            .doc(project.templateId);

      const templateDoc = await templateRef.get();
      if (!templateDoc.exists) return null;

      const data = templateDoc.data();
      if (!data) return null;

      return {
        ...data,
        id: templateDoc.id,
      } as ProjectTemplate | PublishedProjectTemplate;

    } catch (error) {
      console.error('Error in getProjectTemplate:', error);
      return null;
    }
  }

  async getProject(userId: string, projectId: string): Promise<Project | null> {
    try {
      const projectDoc = await admin.firestore()
        .collection('users')
        .doc(userId)
        .collection('projects')
        .doc(projectId)
        .get();

      if (!projectDoc.exists) return null;

      const data = projectDoc.data();
      if (!data) return null;

      return {
        ...data,
        id: projectDoc.id,
      } as Project;

    } catch (error) {
      console.error('Error in getProject:', error);
      return null;
    }
  }

  async updateStepArtifact(userId: string, projectId: string, stepId: string, artifact: any) {
    try {
      await admin.firestore()
        .collection('users')
        .doc(userId)
        .collection('projects')
        .doc(projectId)
        .collection('steps')
        .doc(stepId)
        .update({
          artifact: {
            ...artifact,
            createdAt: new Date()
          }
        });
      return true;
    } catch (error) {
      console.error('Error in updateStepArtifact:', error);
      return false;
    }
  }

  async updateTemplateWithNewDocument(
    userId: string,
    templateId: string,
    stepId: string,
    newDoc: ReferenceDocument
  ): Promise<boolean> {
    try {
      const templateRef = admin.firestore()
        .collection("users")
        .doc(userId)
        .collection("projectTemplates")
        .doc(templateId);

      await admin.firestore().runTransaction(async (transaction) => {
        const doc = await transaction.get(templateRef);
        if (!doc.exists) {
          throw new Error("Template document does not exist");
        }

        const templateData = doc.data();
        if (!templateData) {
          throw new Error("Template data is missing");
        }

        const template = {
          ...templateData,
          id: doc.id,
        } as ProjectTemplate;

        const updatedSteps = template.steps.map((step) => {
          if (step.id === stepId) {
            return {
              ...step,
              referenceDocuments: [
                ...(step.referenceDocuments || []),
                newDoc
              ]
            };
          }
          return step;
        });

        transaction.update(templateRef, { steps: updatedSteps });
      });

      return true;
    } catch (error) {
      console.error("Error in updateTemplateWithNewDocument:", error);
      return false;
    }
  }
}

export const firestoreService = new FirestoreService();