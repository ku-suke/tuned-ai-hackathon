interface EnvironmentVariables {
  PORT: number;
  GEMINI_API_KEY: string;
  PROJECT_ID: string;
}

export function validateEnv(): EnvironmentVariables {
  const env = process.env;

  if (!env.GEMINI_API_KEY) {
    throw new Error('GEMINI_API_KEY is required');
  }

  if (!env.PROJECT_ID) {
    throw new Error('PROJECT_ID is required');
  }

  return {
    PORT: parseInt(env.PORT || '8080', 10),
    GEMINI_API_KEY: env.GEMINI_API_KEY,
    PROJECT_ID: env.PROJECT_ID,
  };
}