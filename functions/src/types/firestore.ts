// Firestore types

export interface User {
  id: string;
  email: string;
  displayName: string;
  createdAt: Date;
}

// プライベートテンプレート（ユーザーのサブコレクション）
export interface ProjectTemplate {
  id: string;
  title: string;
  description: string;
  createdAt: Date;
  updatedAt: Date;
  isPublished: boolean;
  publishedTemplateId?: string; // 公開済みの場合、公開テンプレートのID
  steps: ProjectTemplateStep[];
}

// 公開テンプレート
export interface PublishedProjectTemplate {
  id: string;
  originalTemplateId: string;
  userId: string;
  authorName: string;
  title: string;
  description: string;
  publishedAt: Date;
  updatedAt: Date;
  categories: string[];
  steps: ProjectTemplateStep[];
  usageCount: number;
}

export interface ProjectTemplateStep {
  id: string;
  title: string;
  order: number;
  systemPrompt: string;
  userChoicePrompts?: string[];
  referenceDocuments: ReferenceDocument[];
  artifactGenerationPrompt: string;
}

export interface ReferenceDocument {
  id: string;
  title: string;
  parsed: boolean;
  content: string;
  type: 'text' | 'pdf' | 'docx';
}

export interface Project {
  id: string;
  userId: string;
  templateId: string;
  templateType: 'private' | 'published'; // テンプレートの種類
  title: string;
  description: string;
  createdAt: Date;
  updatedAt: Date;
  status: 'in_progress' | 'completed';
  steps: ProjectStep[];
}

export interface ProjectStep {
  id: string;
  templateStepId: string;
  order: number;
  conversations: Conversation[];
  artifact?: {
    title: string;
    content: string;
    summary: string;
    charCount: number;
    createdAt: Date;
  };
  documents: {
    id: string;
    isEnabled: boolean;
  }[];
  uploadedDocuments: ReferenceDocument[];
}

export interface Conversation {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  createdAt: Date;
}