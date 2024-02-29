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
      state.formData[field] = value.replace(/[^a-zA-Z0-9_\-.]/g, '');
      return state;

    case 'email':
      state.formData[field] = value.replace(/[^a-zA-Z0-9@._-]/g, '');
      state.formValidation[field].isValid =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(state.formData[field]) ||
        state.formData[field] === '';
      state.formValidation[field].comment = state.formValidation[field].isValid
        ? ''
        : 'Invalid email format';
      return state;

    case 'password':
      state.formData[field] = value.replace(
        /[^a-zA-Z0-9!@#$%^&*'"_:;,?.-]/g,
        '',
      );
      state.formValidation[field].isValid =
        (value.length >= 10 && value.length <= 20) || value === '';
      state.formValidation[field].comment = state.formValidation[field].isValid
        ? ''
        : 'Password must be between 10 and 20';
      return state;

    case 'confirmPassword':
      state.formData[field] = value.replace(
        /[^a-zA-Z0-9!@#$%^&*'"_:;,?./-]/g,
        '',
      );
      state.formValidation[field].isValid =
        (value.length >= 10 && value.length <= 20) || value === '';
      state.formValidation[field].comment = state.formValidation[field].isValid
        ? ''
        : 'Confirm Password must be between 10 and 20';
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
