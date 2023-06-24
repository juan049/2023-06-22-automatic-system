import type { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions: NextAuthOptions = {
  session: {
    strategy: "jwt",
  },
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        userName: {
          label: "Usuario",
          type: "text",
          placeholder: "Tu usuario",
        },
        password: { label: "Contraseña", type: "password", placeholder: 'Tu contraseña' },
      },
      async authorize(credentials) {
        const user = { id: "1", name: "Admin", email: "admin@admin.com" };
        return user;
      },
    }),
  ],
  pages: {
    signIn: '/login'
  }
};
