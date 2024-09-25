import { Metadata } from "next";

export const SITE_CONFIG: Metadata = {
    title: {
        // write a default title for astra a ai powered website builder suggest something unique and catchy don't use the same words of ai powered website builder give a unique name
        default: "Team Aether - Computational Astrophysics at University of Maryland",
        template: `%s | Aether`
    },
    description: "Unlocking the Universe with Clearer Galaxy Images Through Gravitational Lensing.",
    icons: {
        icon: [
            {
                url: "/icons/favicon.ico",
                href: "/icons/favicon.ico",
            }
        ]
    },
    openGraph: {
        title: "Team Aether - Computational Astrophysics at University of Maryland",
        description: "Unlocking the Universe with Clearer Galaxy Images Through Gravitational Lensing.",
        images: [
            {
                url: "/assets/og-image.png",
            }
        ]
    },
    twitter: {
        card: "summary_large_image",
        creator: "@shreyassihasane",
        title: "Team Aether - Computational Astrophysics at University of Maryland",
        description: "Unlocking the Universe with Clearer Galaxy Images Through Gravitational Lensing.",
        images: [
            {
                url: "/assets/og-image.png",
            }
        ]
    },
    metadataBase: new URL("https://aetherumd.github.io/aether-astra/"),
};
