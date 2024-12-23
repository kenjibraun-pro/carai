import { Button } from "@nextui-org/button";
import { PlayIcon } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Onboarding() {
    const router = useRouter();

    return (
        <div className="min-h-dvh pt-16 selection:bg-background">
            <div className="container mx-auto flex flex-col items-center lg:flex-row lg:justify-between xl:flex-row xl:justify-between">
                <div className="flex flex-col space-y-12">
                    <h1 className="text-5xl font-bold text-primary dark:text-white">
                        Get Started with Carai
                    </h1>

                    <ul className="list-none space-y-12 p-0">
                        {onboardingProps.features.map((feature) => (
                            <li
                                key={feature}
                                className="flex flex-row items-center text-2xl font-light text-default-500 text-opacity-50 transition-all duration-500 hover:scale-105 hover:cursor-pointer hover:text-opacity-100"
                            >
                                <PlayIcon
                                    className="mr-2"
                                    fill="currentColor"
                                    size={24}
                                    stroke="none"
                                />
                                <p>{feature}</p>
                            </li>
                        ))}
                    </ul>

                    <div className="inline-flex flex-col gap-y-4">
                        {onboardingProps.quickLinks.map(({ id, uri, label }, index) => (
                            <Button
                                key={id}
                                fullWidth
                                className="text-white"
                                color={index === 0 ? "primary" : "default"}
                                radius="sm"
                                size={"lg"}
                                startContent={<span>{label}</span>}
                                variant="solid"
                                onPress={() => {
                                    router.push(uri);
                                }}
                            />
                        ))}
                    </div>
                </div>
                <div className="hidden lg:block xl:block">
                    <Image
                        priority
                        alt="coding illustration"
                        className="h-auto w-auto"
                        height={500}
                        src={"/onboarding.svg"}
                        width={500}
                    />
                </div>
            </div>
        </div>
    );
}

type QuickLinks = {
    id: string;
    label: string;
    uri: string;
};

type OnboardingProp = {
    quickLinks: QuickLinks[];
    features: string[];
};

const onboardingProps: OnboardingProp = {
    quickLinks: [
        {
            id: "sign-up",
            label: "Create Account",
            uri: "/sign-up",
        },
        {
            id: "sign-in",
            label: "Log In",
            uri: "/sign-in",
        },
    ],
    features: [
        "Share, review, and improve your code",
        "Connect and code with peers",
        "Communicate in real-time",
        "Keep track of changes",
        "Start collaborating today",
    ],
} as const;
