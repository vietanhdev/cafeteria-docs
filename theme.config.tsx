import type { DocsThemeConfig } from "nextra-theme-docs";
import { useConfig } from "nextra-theme-docs";
import { useRouter } from "next/router";

const logo = (
  <>
    <div className="flex flex-col">
      <img className="h-9 w-auto" src="/apple-icon-180x180.png"></img>
    </div>
    <div className="font-bold text-2xl ml-2 dark:text-white">Cafeteria</div>
  </>
);

const config: DocsThemeConfig = {
  project: {
    link: "https://github.com/NextCafeteria/cafeteria",
  },
  docsRepositoryBase: "https://github.com/vietanhdev/cafeteria-docs",
  useNextSeoProps() {
    const { asPath } = useRouter();
    if (asPath !== "/") {
      return {
        titleTemplate: "%s – Cafeteria",
      };
    }
  },
  logo,
  head: function useHead() {
    const { title } = useConfig();
    const { route } = useRouter();
    const socialCard =
      route === "/" || !title
        ? "https://cafeteria.nrl.ai/og.png"
        : `https://cafeteria.nrl.ai/api/og?title=${title}`;

    return (
      <>
        <meta name="msapplication-TileColor" content="#fff" />
        <meta name="theme-color" content="#fff" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="Content-Language" content="en" />
        <meta
          name="description"
          content="Online ordering and store management for coffeshops."
        />
        <meta
          name="og:description"
          content="Online ordering and store management for coffeshops."
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content={socialCard} />
        <meta name="twitter:site:domain" content="nextra.site" />
        <meta name="twitter:url" content="https://nextra.site" />
        <meta
          name="og:title"
          content={title ? title + " – Nextra" : "Nextra"}
        />
        <meta name="og:image" content={socialCard} />
        <meta name="apple-mobile-web-app-title" content="Nextra" />
        <link rel="icon" href="/apple-icon-180x180.png" type="image/png" />
      </>
    );
  },
  banner: {
    key: "cafeteria-releases",
    text: (
      <a href="https://github.com/NextCafeteria/cafeteria/releases" target="_blank" rel="noreferrer">
        🎉 The first version of Cafeteria has been released! 🎉
      </a>
    ),
  },
  editLink: {
    text: "Edit this page on GitHub →",
  },
  feedback: {
    content: "Question? Give us feedback →",
    labels: "feedback",
  },
  sidebar: {
    titleComponent({ title, type }) {
      if (type === "separator") {
        return <span className="cursor-default">{title}</span>;
      }
      return <>{title}</>;
    },
    defaultMenuCollapseLevel: 2,
    toggleButton: true,
  },
  footer: {
    text: (
      <div className="flex w-full flex-col items-center sm:items-start">
        <div>
          <a
            className="flex items-center gap-1 text-current"
            target="_blank"
            rel="noopener noreferrer"
            title=""
            href="https://github.com/NextCafeteria/cafeteria"
          >
            <div className="pt-0 mt-0">
              Developed by{" "}
              <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 text-bold">
                NextCafeteria
              </span>
              .
            </div>
          </a>
        </div>
        <p className="mt-2 text-xs">
          © {new Date().getFullYear()} The Cafeteria Project.
        </p>
      </div>
    ),
  },
};

export default config;
