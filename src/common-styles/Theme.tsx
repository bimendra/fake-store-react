export type ThemeConfig = {
    headingsColor: string;
    textColor: string;
    disabledColor: string;
    textColorDisabled: string;
    textColorContrast: string;
    textColorContrastDisabled: string;
    primaryColor: string;
    primaryColorHover: string; 
    PrimaryColorActive: string;
    backgroundColor: string;
    backgroundColorSecondary: string;
    borderColor: string;
}

export const theme: {
    light: ThemeConfig
} = {
    light: {
        headingsColor: '#000000',
        textColor: '#363a36',
        disabledColor: '#bbbbbb',
        textColorDisabled: '#bbbbbb',
        textColorContrast: '#ffffff',
        textColorContrastDisabled: '#ffffff',
        primaryColor: '#c06014',
        primaryColorHover: '#ad5713',
        PrimaryColorActive: '#cf6512',
        backgroundColor: '#ffffff',
        backgroundColorSecondary: '#f3f4ed',
        borderColor: '#dee2e6'
    }
};