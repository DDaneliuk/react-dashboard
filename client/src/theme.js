// mui theme settings
const colorToken = {
    main: {
        100: "#ffffff",
    },
    secondary: {
        100: "#ff5757",
    },
    background: {
        50: "#ffffff",
        100: "#fafafa",
        200: "#ededed",
    },
    orange: {
        100: "#FFC043",
    },
    green: {
        100: "#06C167",
    },
    red: {
        100: "#ff5757",
    },
    blue: {
        100: "#276EF1",
    },
    black:{
        100: "#000000"
    }
};

 export const themeSettings = () => {
    return {
        palette: {
            primary: {
                main: colorToken.main[100],
            },
            secondary: {
                main: colorToken.secondary[100],
            },
            background: {
                main: colorToken.background[100],
                add: colorToken.background[200],
            },
            statisticBg: {
                reports: colorToken.orange[100],
                partners: colorToken.green[100],
                countries: colorToken.red[100],
                rate: colorToken.blue[100],
            },
            text: {
                main: colorToken.black[100],
                add: colorToken.main[100],
            }
        },
        typography: {
            fontSize: 12,
            h1: {
                fontSize: 40,
            },
            h2: {
                fontSize: 32,
            },
            h3: {
                fontSize: 24,
            },
            h4: {
                fontSize: 20,
            },
            h5: {
                fontSize: 16,
            },
            h6: {
                fontSize: 14,
            },
        },
    }
}
