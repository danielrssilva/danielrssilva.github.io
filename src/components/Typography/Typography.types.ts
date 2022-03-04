import { Theme } from "../../theme";

enum TypographyTypesNames {
  Header1 = "Header1",
  Header2 = "Header2",
  Header3 = "Header3",
  Header4 = "Header4",
  Header5 = "Header5",
  Subtitle1 = "Subtitle1",
  Subtitle2 = "Subtitle2",
  Subtitle3 = "Subtitle3",
  Subtitle4 = "Subtitle4",
  Text = "Text",
  Caption = "Caption",
}

interface TypographyTypeProps {
  /** Types of typography components */
  readonly textType: TypographyTypesNames;
}

interface TypographyTypesOptions {
  /** Acceptable html attributes which will be rendered. */
  readonly as: "h1" | "h2" | "h3" | "h4" | "h5" | "span" | "p";
  /** Custom Object of css attributes of a typography component. */
  readonly css?: Record<string, string>;
}

interface TypographyProps {
  /** Component content */
  readonly children?: React.ReactNode;
  readonly color?: string;
}

type TypographyTypes = {
  readonly [name in TypographyTypesNames]: TypographyTypesOptions;
};

const Typography: TypographyTypes = {
  Header1: {
    as: "h1",
  },
  Header2: {
    as: "h2",
  },
  Header3: {
    as: "h3",
  },
  Header4: {
    as: "h4",
  },
  Header5: {
    as: "h3",
  },
  Subtitle1: {
    as: "p",
  },
  Subtitle2: {
    as: "p",
  },
  Subtitle3: {
    as: "p",
  },
  Subtitle4: {
    as: "p",
  },
  Text: {
    as: "span",
  },
  Caption: {
    as: "span",
  },
};

const TypographyStyleTypes: Record<
  string,
  Record<string, Record<string, string | number>>
> = {
  Header1: {
    css: {
      fontSize: "14rem",
      fontWeight: Theme.fonts.weight.bold,
      lineHeight: "14rem",
    },
  },
  Header2: {
    css: {
      fontSize: "6rem",
      fontWeight: Theme.fonts.weight.light,
      lineHeight: "6rem",
    },
  },
  Header3: {
    css: {
      fontSize: "2.6rem",
      fontWeight: Theme.fonts.weight.light,
      lineHeight: "2.6rem",
    },
  },
  Header4: {
    css: {
      fontSize: "2rem",
      fontWeight: Theme.fonts.weight.thin,
      lineHeight: "2rem",
    },
  },
  Header5: {
    css: {
      fontSize: "1.4rem",
      fontWeight: Theme.fonts.weight.thin,
      lineHeight: "1.6rem",
    },
  },
  Subtitle1: {
    css: {
      fontSize: "2.4rem",
      fontWeight: Theme.fonts.weight.light,
      lineHeight: "2.4rem",
    },
  },
  Subtitle2: {
    css: {
      fontSize: "2rem",
      fontWeight: Theme.fonts.weight.light,
      lineHeight: "2rem",
    },
  },
  Subtitle3: {
    css: {
      fontSize: "1.5rem",
      fontWeight: Theme.fonts.weight.light,
      lineHeight: "1.6rem",
    },
  },
  Subtitle4: {
    css: {
      fontSize: "1rem",
      fontWeight: Theme.fonts.weight.light,
      lineHeight: "1.6rem",
    },
  },
  Text: {
    css: {
      fontSize: Theme.fonts.size,
      fontWeight: Theme.fonts.weight.regular,
      lineHeight: Theme.fonts.lineHeight,
    },
  },
  Caption: {
    css: {
      fontSize: "1.2rem",
      fontWeight: Theme.fonts.weight.light,
      lineHeight: "1.6rem",
    },
  },
};

export { TypographyTypesNames, Typography, TypographyStyleTypes };
export type { TypographyTypeProps, TypographyProps };
