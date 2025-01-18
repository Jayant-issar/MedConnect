import { SignIn } from '@clerk/clerk-react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';

const SignInPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50 flex items-center justify-center p-4">
      <div className="max-w-md w-full space-y-8">
        {/* Logo/Brand Section */}
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Welcome Back</h1>
          <p className="text-gray-600">Sign in to continue to your account</p>
        </div>

        {/* Sign-in Card */}
        <Card className="bg-white/80 backdrop-blur-sm shadow-xl border-0">
          <CardHeader className="space-y-1">
            <CardTitle className="text-2xl font-semibold text-center">Sign In</CardTitle>
            <CardDescription className="text-center">
              Choose your preferred sign in method
            </CardDescription>
          </CardHeader>
          <CardContent>
            <SignIn 
              appearance={{
                elements: {
                  formButtonPrimary: 
                    "bg-purple-600 hover:bg-purple-700 text-sm normal-case",
                  card: "bg-transparent shadow-none",
                  headerTitle: "hidden",
                  headerSubtitle: "hidden",
                  socialButtonsBlockButton: 
                    "border-gray-300 hover:bg-gray-50 text-gray-600 text-sm normal-case",
                  formFieldInput: 
                    "rounded-lg border-gray-300 focus:ring-purple-500 focus:border-purple-500",
                  footer: "hidden"
                },
              }}
            />
          </CardContent>
        </Card>

        {/* Footer */}
        <div className="text-center text-sm text-gray-600">
          <p>
            Protected by Clerk. Read our{" "}
            <a href="#" className="text-purple-600 hover:text-purple-500">
              Terms of Service
            </a>{" "}
            and{" "}
            <a href="#" className="text-purple-600 hover:text-purple-500">
              Privacy Policy
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignInPage;