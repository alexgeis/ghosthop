import "next-auth/jwt";

// Read more at: https://next-auth.js.org/getting-started/typescript#module-augmentation

/** Example on how to extend the built-in session types */
declare module "next-auth" {
	interface Session {
		/** This is an example. You can find me in types/next-auth.d.ts */
		foo: string;
	}
}

declare module "next-auth/jwt" {
	interface JWT {
		/** The user's role. */
		userRole?: "admin";
	}
}
