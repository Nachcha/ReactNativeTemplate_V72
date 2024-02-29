import {useReducer} from 'react';

const initialState = {
  formData: {
    email: '',
  },
  formValidation: {
    email: {
      isValid: true,
      comment: '',
    },
  },
  isValid: false,
};

type ValidatorFormType = typeof initialState;

interface IAction {
  value: string;
  field: 'email';
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
  switch (field) {
    case 'email':
      state.formData[field] = value.replace(/[^a-zA-Z0-9@._-]/g, '');
      state.formValidation[field].isValid =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(state.formData[field]) ||
        state.formData[field] === '';
      state.formValidation[field].comment = state.formValidation[field].isValid
        ? ''
        : 'Invalid email format';
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
