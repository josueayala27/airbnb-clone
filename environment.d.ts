declare global {
  namespace NodeJS {
    interface ProcessEnv {
      __VUE_I18N_FULL_INSTALL__: string;
    }
  }
}

export {}