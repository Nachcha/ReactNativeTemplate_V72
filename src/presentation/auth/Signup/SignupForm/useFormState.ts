import {useReducer} from 'react';

const initialState = {
  formData: {
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  },
  formValidation: {
    username: {
      isValid: true,
      comment: '',
    },
    email: {
      isValid: true,
      comment: '',
    },
    password: {
      isValid: true,
      isSecured: true,
      comment: '',
    },
    confirmPassword: {
      isValid: true,
      isSecured: true,
      comment: '',
    },
  },
  isValid: false,
};

type ValidatorFormType = typeof initialState;

interface IAction {
  value: string;
  field: 'username' | 'email' | 'password' | 'confirmPassword';
  type: 'change' | 'blur' | 'focus' | 'submit';
}

function formHandler(state: ValidatorFormType, action: IAction) {
  const {value, field, type} = action;
  switch (type) {
    case 'change':
      state = validateOnChange(state, value, field);
      return {...state};

    case 'blur':
      state = validateOnBlur(state, value, field);
      return state;

    case 'focus':
      return state;

    case 'submit':
      state = validateOnSubmit(state);
      return state;

    default:
      return state;
  }
}

const validateOnChange = (
  state: ValidatorFormType,
  value: string,
  field: IAction['field'],
): ValidatorFormType => {
  state.formData[field] = value;
  switch (field) {
    case 'username':
      return state;

    case 'email':
      return state;

    case 'password':
      return state;

    case 'confirmPassword':
      return state;

    default:
      return state;
  }
};

const validateOnBlur = (
  state: ValidatorFormType,
  value: string,
  field: IAction['field'],
): ValidatorFormType => {
  switch (field) {
    case 'username':
      return state;

    case 'email':
      return state;

    case 'password':
      return state;

    case 'confirmPassword':
      return state;

    default:
      return state;
  }
};

const validateOnSubmit = (state: ValidatorFormType): ValidatorFormType => {
  return state;
};

export default function useFormState() {
  const [formState, handleFormState] = useReducer(formHandler, initialState);
  return {formState, handleFormState};
}
