import {useReducer} from 'react';

const initialState = {
  formData: {
    email: '',
    password: '',
  },
  formValidation: {
    email: {
      isValid: true,
      comment: '',
    },
    password: {
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
  field: 'email' | 'password';
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
    case 'email':
      return state;

    case 'password':
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
    case 'email':
      return state;

    case 'password':
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
