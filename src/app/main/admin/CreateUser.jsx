import { yupResolver } from '@hookform/resolvers/yup';
import { Controller, useForm } from 'react-hook-form';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import * as yup from 'yup';
import _ from '@lodash';
import Paper from '@mui/material/Paper';
import withReducer from 'app/store/withReducer';
import { Autocomplete } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { isEmpty } from 'lodash';
import { LoadingButton } from '@mui/lab';
import reducer from './store';
import { createUser } from './store/createUser';
import { getUsersToRegister, selectRegisterUsersList } from './store/getUsersToRegister';

/**
 * Form Validation Schema
 */
const schema = yup.object().shape({
  employeeId: yup.number().required('You must enter your name'),
  email: yup
    .string()
    .required('Илтимос э-почта манзилини киритинг')
    .matches(/^[A-Za-z0-9._%+-]+@ung\.uz$/, 'ung.uz доменидаги э-почта манзилини киритинг'),
  password: yup
    .string()
    .required('Илтимос пароль киргазинг.')
    .min(8, 'Парол камида 8 та белгидан иборат булиши керак.'),
  confirmPassword: yup.string().oneOf([yup.ref('password'), null], 'Пароллар мос тушиши керак'),
});

const defaultValues = {
  name: '',
  email: '',
  password: '',
  passwordConfirm: '',
};

function CreateUser() {
  const usersList = useSelector((state) => state.adminOperation.listRegister);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState([]);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { control, formState, handleSubmit, reset, getValues, watch } = useForm({
    mode: 'onChange',
    defaultValues,
    resolver: yupResolver(schema),
  });

  const { isValid, dirtyFields, errors } = formState;
  const form = watch();

  useEffect(() => {
    dispatch(getUsersToRegister());
  }, [dispatch]);

  function onSubmit() {
    setLoading(true);
    dispatch(createUser(getValues())).then(({ payload }) => {
      if (payload?.succeeded) {
        reset(defaultValues);
        navigate('/admin/list');
      } else {
        setError(payload?.messages);
      }
      setLoading(false);
    });
  }
  return (
    <div className="flex flex-col flex-auto items-center sm:justify-center min-w-0">
      <Paper className="w-full sm:w-auto min-h-full sm:min-h-auto rounded-0 py-32 px-16 sm:p-48 sm:rounded-2xl sm:shadow">
        <div className="w-full max-w-420 sm:w-420 mx-auto sm:mx-0">
          {/* <img className="w-48" src="assets/images/logo/logo.svg" alt="logo" /> */}
          <Typography className="mt-32 text-4xl font-extrabold tracking-tight leading-tight">
            Янги фойдаланувчи яратиш
          </Typography>
          <form
            name="registerForm"
            noValidate
            className="flex flex-col justify-center w-full mt-32"
            onSubmit={handleSubmit(onSubmit)}
          >
            <Controller
              name="employeeId"
              control={control}
              render={({ field: { onChange, value } }) => (
                <Autocomplete
                  disablePortal
                  id="combo-box-demo"
                  label="Ходим"
                  autoFocus
                  getOptionLabel={(option) => option.fullname}
                  className="mb-24"
                  error={!!errors.employeeId}
                  helperText={errors?.employeeId?.message}
                  variant="outlined"
                  required
                  onChange={(event, newValue) => {
                    onChange(newValue.id);
                  }}
                  fullWidth
                  options={usersList.entities}
                  renderInput={(params) => <TextField fullWidth {...params} label="Ходим" />}
                />
              )}
            />
            <Controller
              name="email"
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  className="mb-24"
                  label="Электрон почта"
                  type="email"
                  //   InputProps={{
                  //     endAdornment: <InputAdornment position="end">@ung.uz</InputAdornment>,
                  //   }}
                  error={!!errors.email}
                  helperText={errors?.email?.message}
                  variant="outlined"
                  required
                  fullWidth
                />
              )}
            />
            <Controller
              name="password"
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  className="mb-24"
                  label="Пароль"
                  type="password"
                  error={!!errors.password}
                  helperText={errors?.password?.message}
                  variant="outlined"
                  required
                  fullWidth
                />
              )}
            />
            <Controller
              name="confirmPassword"
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  className="mb-24"
                  label="Пароль (тасдиқлаш)"
                  type="password"
                  error={!!errors.confirmPassword}
                  helperText={errors?.confirmPassword?.message}
                  variant="outlined"
                  required
                  fullWidth
                />
              )}
            />
            <div className="flex justify-center">
              {!isEmpty(error) &&
                error.map((message) => <span className="text-red-500">{message}</span>)}
            </div>

            <LoadingButton
              variant="contained"
              color="secondary"
              loading={loading}
              className=" w-full mt-24"
              aria-label="Register"
              disabled={_.isEmpty(dirtyFields) || !isValid}
              type="submit"
              size="large"
            >
              Яратиш
            </LoadingButton>
          </form>
        </div>
      </Paper>
    </div>
  );
}

export default withReducer('adminOperation', reducer)(CreateUser);
