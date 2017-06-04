declare module "nativescript-appavailability" {
    /**
     * Pass in the package name as and we'll tell you whether or not the app is installed.
     * See the GitHub readme for details on the package name.
     */
    export function available(packagename: string): Promise<boolean>;
    export function availableSync(packagename: string): boolean;
}