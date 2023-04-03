export const rules = {
  name: {
    required: "Esse campo é obrigatório",
    minLength: {
      value: 3,
      message: "Esse campo deve conter no mínimo 3 caracteres",
    },
    maxLength: {
      value: 30,
      message: "Esse campo deve conter no máximo 30 caracteres",
    },
  },
  subject: {
    required: "Esse campo é obrigatório",
    minLength: {
      value: 3,
      message: "Esse campo deve conter no mínimo 3 caracteres",
    },
    maxLength: {
      value: 30,
      message: "Esse campo deve conter no máximo 30 caracteres",
    },
  },
  message: {
    required: "Esse campo é obrigatório",
    minLength: {
      value: 3,
      message: "Esse campo deve conter no mínimo 3 caracteres",
    },
    maxLength: {
      value: 300,
      message: "Esse campo deve conter no máximo 300 caracteres",
    },
  },
  email: {
    required: "Esse campo é obrigatório",
    pattern: {
      value: /^\S+@\S+\.\S+$/,
      message: "Por favor, insira um e-mail válido",
    },
  },
  phone: {
    required: "Esse campo é obrigatório",
    pattern: {
      value: /^\([1-9]{2}\) [0-9]{4,5}-[0-9]{4,5}$/,
      message:
        "Por favor, insira um número de telefone válido (ex: (11) 91234-5678)",
    },
  },
};
