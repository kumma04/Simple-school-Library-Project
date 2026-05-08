import { useState } from 'react';
import {
  Card,
  CardContent,
  TextField,
  Button,
  ToggleButtonGroup,
  ToggleButton,
  Typography,
  Box,
  InputAdornment,
  IconButton
} from '@mui/material';
import { BookOpen, User, Eye, EyeOff } from 'lucide-react';

export default function App() {
  const [userType, setUserType] = useState<'student' | 'visitor'>('student');
  const [libraryId, setLibraryId] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleSignIn = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Sign in:', { userType, libraryId, password });
    // Add your authentication logic here
  };

  return (
    <div className="size-full flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-50">
      <Card sx={{ maxWidth: 450, width: '100%', m: 2, boxShadow: 3 }}>
        <CardContent sx={{ p: 4 }}>
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mb: 3 }}>
            <Box sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: 64,
              height: 64,
              borderRadius: '50%',
              bgcolor: 'primary.main',
              mb: 2
            }}>
              <BookOpen size={32} color="white" />
            </Box>
            <Typography variant="h5" component="h1" fontWeight={600} gutterBottom>
              Library Sign In
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Access library resources and services
            </Typography>
          </Box>

          <Box sx={{ mb: 3, display: 'flex', justifyContent: 'center' }}>
            <ToggleButtonGroup
              value={userType}
              exclusive
              onChange={(_, value) => value && setUserType(value)}
              fullWidth
              sx={{ maxWidth: 300 }}
            >
              <ToggleButton value="student">
                Student
              </ToggleButton>
              <ToggleButton value="visitor">
                Visitor
              </ToggleButton>
            </ToggleButtonGroup>
          </Box>

          <form onSubmit={handleSignIn}>
            <TextField
              fullWidth
              label={userType === 'student' ? 'Student ID' : 'Visitor ID'}
              variant="outlined"
              value={libraryId}
              onChange={(e) => setLibraryId(e.target.value)}
              required
              sx={{ mb: 2 }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <User size={20} />
                  </InputAdornment>
                ),
              }}
            />

            <TextField
              fullWidth
              label="Password"
              type={showPassword ? 'text' : 'password'}
              variant="outlined"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              sx={{ mb: 3 }}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      onClick={() => setShowPassword(!showPassword)}
                      edge="end"
                    >
                      {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />

            <Button
              type="submit"
              variant="contained"
              fullWidth
              size="large"
              sx={{ mb: 2 }}
            >
              Sign In
            </Button>

            <Box sx={{ textAlign: 'center' }}>
              <Typography variant="body2" color="text.secondary">
                Forgot your password?{' '}
                <a href="#" style={{ color: '#1976d2', textDecoration: 'none' }}>
                  Reset here
                </a>
              </Typography>
            </Box>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}