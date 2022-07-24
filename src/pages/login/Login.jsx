import {
  Box,
  Grid,
  Typography,
  TextField,
  Button,
  CircularProgress,
  colors,
} from '@mui/material';
import { useForm, SubmitHandler, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import './login.scss';

const Login = () => {
  console.log('ok');
  // const { login } = useLogin();
  // const [errMessage, setErrMessage] = useState('');
  // const [loading, setLoading] = useState < boolean > false;
  // const {
  //   formState: { isValid },
  //   control,
  //   handleSubmit,
  // } = useForm <
  // User >
  // {
  //   resolver: yupResolver(loginSchema),
  //   mode: 'onChange',
  // };
  // const dispatch = useAppDispatch();
  // const loginselectorResult = useAppSelector(loginSelector);
  // const navigate = useNavigate();

  // useEffect(() => {
  //   if (loginselectorResult.response?.data?.accessToken) {
  //     return navigate('/user');
  //   }
  //   if (loginselectorResult.response?.message) {
  //     setErrMessage(loginselectorResult.response.message);
  //   }
  // }, [navigate, loginselectorResult]);

  // const formSubmitHandler = async (user) => {
  //   setLoading(true);
  //   try {
  //     const { data } = await login(user);
  //     dispatch(loginAsync(data));
  //   } catch (err) {
  //     return err;
  //   } finally {
  //     setLoading(false);
  //   }
  // };
  return (
    <Grid container>
      <Grid item xs={12}>
        <Box
          sx={{
            minHeight: '100vh',
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          <Box
            component="form"
            // onSubmit={handleSubmit(formSubmitHandler)}
            sx={{
              width: '376px',
              mt: 6,
            }}
          >
            <Typography
              variant="h4"
              sx={{
                fontWeight: 'bold',
                mb: 3,
                '@media(min-height: 768px)': { mt: '150px' },
                '@media(min-height: 920px)': { mt: '25vh' },
              }}
            >
              Đăng nhập vào tài khoản
            </Typography>
            <Box>
              <Box sx={{ mb: 2 }}>
                <Typography component="label" variant="body1">
                  Tài khoản đăng nhập hoặc email
                </Typography>
                <TextField
                  fullWidth
                  placeholder="123456789"
                  sx={{ root: { height: '50px' }, mt: 1 }}
                />
              </Box>
              <Box>
                <Typography component="label" variant="body1">
                  Mật khẩu
                </Typography>
                <TextField
                  fullWidth
                  type="password"
                  placeholder="***********"
                  sx={{ root: { height: '50px' }, mt: 1 }}
                />
              </Box>
              <Box mt={2} mb={3}>
                <Typography
                  mb={2}
                  align="right"
                  sx={{ cursor: 'pointer', color: colors.indigo['600'] }}
                >
                  <Link to="/forgot-password">Quên mật khẩu?</Link>
                </Typography>
                <Button
                  fullWidth
                  sx={{
                    background: colors.green['400'],
                    color: '#fff',
                    height: '50px',
                    '&:hover': {
                      background: colors.green['600'],
                    },
                  }}
                  variant="contained"
                  // disabled={Boolean(!isValid || loading)}
                  type="submit"
                  // startIcon={loading && <CircularProgress size={20} />}
                >
                  Đăng nhập
                </Button>
              </Box>
              <Box>
                <Typography my={3}>
                  Hoặc đăng ký tài khoản, nếu bạn chưa đăng ký !
                </Typography>
                <Button
                  fullWidth
                  component={Link}
                  to={'/register'}
                  sx={{
                    color: colors.green['400'],
                    height: '50px',
                    '&:hover': {
                      background: colors.green['100'],
                    },
                    borderColor: colors.green['400'],
                    border: 1,
                  }}
                  type="submit"
                >
                  Đăng ký
                </Button>
              </Box>
            </Box>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
};

export default Login;
