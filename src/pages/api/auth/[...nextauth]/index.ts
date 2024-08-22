import NextAuth from 'next-auth'
import Auth0Provider from 'next-auth/providers/auth0'

export default NextAuth({
  providers: [
    Auth0Provider({
      clientId: process.env.AUTH0_CLIENT_ID!,
      clientSecret: process.env.AUTH0_CLIENT_SECRET!,
      issuer: process.env.AUTH0_ISSUER
    })
  ],
  pages: {
    signIn: '/login'
  },
  callbacks: {
    async jwt ({ token, account, profile }) {
      if (account) {
        token.accessToken = account.access_token
        token.id = profile?.sub
      }
      return token
    },
    async session ({ session, token }) {
      (session).accessToken = token.accessToken
      if (session.user) {
        (session).user.id = token.id
      }
      return session
    }
  }
})
