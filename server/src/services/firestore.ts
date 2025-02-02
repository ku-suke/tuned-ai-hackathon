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

  async getProjectSteps(userId: string, projectId: string): Promise<ProjectStep[]> {
    try {
      const stepsSnapshot = await admin.firestore()
        .collection('users')
        .doc(userId)
        .collection('projects')
        .doc(projectId)
        .collection('steps')
        .orderBy('order')
        .get();

      return stepsSnapshot.docs.map(doc => {
        const data = doc.data();
        return {
          ...data,
          id: doc.id,
          conversations: Array.isArray(data.conversations) ? data.conversations : [],
          documents: Array.isArray(data.documents) ? data.documents : [],
          uploadedDocuments: Array.isArray(data.uploadedDocuments) ? data.uploadedDocuments : []
        } as ProjectStep;
      });
    } catch (error) {
      console.error('Error in getProjectSteps:', error);
      return [];
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
}

export const firestoreService = new FirestoreService();