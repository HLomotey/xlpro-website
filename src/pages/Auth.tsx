
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Chrome, User, Mail, Lock, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const demoAccounts = [
  { role: 'Admin', email: 'admin@xlpro.com', color: 'bg-gradient-to-r from-purple-500 to-blue-600' },
  { role: 'Manager', email: 'manager@xlpro.com', color: 'bg-gradient-to-r from-green-500 to-teal-600' },
  { role: 'User', email: 'user@xlpro.com', color: 'bg-gradient-to-r from-orange-500 to-red-600' },
];

const Auth = () => {
  const [isLoading, setIsLoading] = useState(false);

  const handleGoogleSignIn = () => {
    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      console.log('Google sign-in initiated');
    }, 1000);
  };

  const handleDemoLogin = (account: any) => {
    console.log('Demo login:', account);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="mb-6">
          <Link to="/" className="inline-flex items-center text-foreground/70 hover:text-foreground transition-colors">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Home
          </Link>
        </div>

        <Card className="glass-card border-white/20">
          <CardHeader className="text-center">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">X</span>
              </div>
              <span className="text-xl font-bold gradient-text">xlPro</span>
            </div>
            <CardTitle>Welcome Back</CardTitle>
            <CardDescription>Sign in to your xlPro account</CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="signin" className="w-full">
              <TabsList className="grid w-full grid-cols-2 glass-subtle">
                <TabsTrigger value="signin">Sign In</TabsTrigger>
                <TabsTrigger value="signup">Sign Up</TabsTrigger>
              </TabsList>

              <TabsContent value="signin" className="space-y-4">
                <Button 
                  onClick={handleGoogleSignIn}
                  disabled={isLoading}
                  className="w-full btn-glass"
                >
                  <Chrome className="h-4 w-4 mr-2" />
                  Continue with Google
                </Button>

                <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                    <span className="w-full border-t border-white/20" />
                  </div>
                  <div className="relative flex justify-center text-xs uppercase">
                    <span className="bg-background px-2 text-foreground/60">Or continue with</span>
                  </div>
                </div>

                <form onSubmit={handleFormSubmit} className="space-y-4">
                  <div className="space-y-2">
                    <div className="relative">
                      <Mail className="absolute left-3 top-3 h-4 w-4 text-foreground/50" />
                      <Input 
                        type="email" 
                        placeholder="Email"
                        className="glass-subtle pl-10"
                        required
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="relative">
                      <Lock className="absolute left-3 top-3 h-4 w-4 text-foreground/50" />
                      <Input 
                        type="password" 
                        placeholder="Password"
                        className="glass-subtle pl-10"
                        required
                      />
                    </div>
                  </div>
                  <Button 
                    type="submit" 
                    disabled={isLoading}
                    className="w-full btn-primary"
                  >
                    {isLoading ? 'Signing in...' : 'Sign In'}
                  </Button>
                </form>

                <div className="space-y-3">
                  <p className="text-sm text-foreground/60 text-center">Try demo accounts:</p>
                  {demoAccounts.map((account, index) => (
                    <Button
                      key={index}
                      onClick={() => handleDemoLogin(account)}
                      className={`w-full text-white ${account.color} hover:opacity-90 transition-all`}
                    >
                      <User className="h-4 w-4 mr-2" />
                      {account.role} - {account.email}
                    </Button>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="signup" className="space-y-4">
                <Button 
                  onClick={handleGoogleSignIn}
                  disabled={isLoading}
                  className="w-full btn-glass"
                >
                  <Chrome className="h-4 w-4 mr-2" />
                  Sign up with Google
                </Button>

                <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                    <span className="w-full border-t border-white/20" />
                  </div>
                  <div className="relative flex justify-center text-xs uppercase">
                    <span className="bg-background px-2 text-foreground/60">Or sign up with email</span>
                  </div>
                </div>

                <form onSubmit={handleFormSubmit} className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="relative">
                      <User className="absolute left-3 top-3 h-4 w-4 text-foreground/50" />
                      <Input 
                        type="text" 
                        placeholder="First Name"
                        className="glass-subtle pl-10"
                        required
                      />
                    </div>
                    <div className="relative">
                      <User className="absolute left-3 top-3 h-4 w-4 text-foreground/50" />
                      <Input 
                        type="text" 
                        placeholder="Last Name"
                        className="glass-subtle pl-10"
                        required
                      />
                    </div>
                  </div>
                  <div className="relative">
                    <Mail className="absolute left-3 top-3 h-4 w-4 text-foreground/50" />
                    <Input 
                      type="email" 
                      placeholder="Email"
                      className="glass-subtle pl-10"
                      required
                    />
                  </div>
                  <div className="relative">
                    <Lock className="absolute left-3 top-3 h-4 w-4 text-foreground/50" />
                    <Input 
                      type="password" 
                      placeholder="Password"
                      className="glass-subtle pl-10"
                      required
                    />
                  </div>
                  <Button 
                    type="submit" 
                    disabled={isLoading}
                    className="w-full btn-primary"
                  >
                    {isLoading ? 'Creating account...' : 'Create Account'}
                  </Button>
                </form>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Auth;
