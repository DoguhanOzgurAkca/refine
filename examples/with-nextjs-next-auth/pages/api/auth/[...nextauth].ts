import NextAuth, { Awaitable, User } from "next-auth";
import Auth0Provider from "next-auth/providers/auth0";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import KeycloakProvider from "next-auth/providers/keycloak";

export const authOptions = {
    // Configure one or more authentication providers
    providers: [
        // !!! Should be stored in .env file.
        GoogleProvider({
            clientId: `1041339102270-e1fpe2b6v6u1didfndh7jkjmpcashs4f.apps.googleusercontent.com`,
            clientSecret: `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`,
        }),
        Auth0Provider({
            clientId: `Be5vsLunFvpzPf4xfXtaMxrZUVBjjNPO`,
            clientSecret: `08F9X84FvzpsimV16CQvlQuwJOlqk-GqQgEdcq_3xzrn1K3UHnTCcRgMCwBW7api`,
            issuer: `https://dev-qg1ftdys736bk5i3.us.auth0.com`,
        }),
        KeycloakProvider({
            clientId: `refine-demo`,
            clientSecret: `refine`,
            issuer: `https://lemur-0.cloud-iam.com/auth/realms/refine`,
            profile(profile) {
                return {
                    id: profile.sub,
                    name: profile.name ?? profile.preferred_username,
                    email: profile.email,
                    image: `https://faces-img.xcdn.link/thumb-lorem-face-6312_thumb.jpg`,
                };
            },
        }),
        CredentialsProvider({
            id: "CredentialsSignIn",
            credentials: {},
            async authorize(credentials: any) {
                // TODO: Request your API to check credentials
                console.log(
                    "CredentialsSignIn",
                    JSON.stringify(credentials, null, 2),
                );

                // check credentials
                // if not valid return null
                if (credentials?.["email"] !== "demo@refine.dev") {
                    return null;
                }

                const user: Awaitable<User> = {
                    id: "1",
                    name: "John Doe",
                    email: "demo@refine.dev",
                    image: "https://i.pravatar.cc/300",
                };
                return user;
            },
        }),
        CredentialsProvider({
            id: "CredentialsSignUp",
            credentials: {},
            async authorize(credentials: any) {
                // TODO: Request your API to create new user
                console.log(
                    "CredentialsSignUp",
                    JSON.stringify(credentials, null, 2),
                );

                // return mocked user
                const user: Awaitable<User> = {
                    id: "1",
                    name: "John Doe",
                    email: "demo@refine.dev",
                    image: "https://i.pravatar.cc/300",
                };
                return user;
            },
        }),
    ],
    secret: `UItTuD1HcGXIj8ZfHUswhYdNd40Lc325R8VlxQPUoR0=`,
};
export default NextAuth(authOptions);
