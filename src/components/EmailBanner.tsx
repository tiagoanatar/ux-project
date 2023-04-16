import {
  createStyles,
  Text,
  TextInput,
  Button,
  Flex,
  rem,
} from "@mantine/core";

const useStyles = createStyles((theme) => ({
  wrapper: {
    display: "flex",
    alignItems: "center",
    padding: `calc(${theme.spacing.xl} * 2)`,
    borderRadius: theme.radius.md,
    backgroundColor:
      theme.colorScheme === "dark" ? theme.colors.dark[8] : theme.white,
    border: `${rem(1)} solid ${
      theme.colorScheme === "dark" ? theme.colors.dark[8] : theme.colors.gray[3]
    }`,

    [theme.fn.smallerThan("sm")]: {
      flexDirection: "column-reverse",
      padding: theme.spacing.xl,
    },
  },

  image: {
    maxWidth: "40%",

    [theme.fn.smallerThan("sm")]: {
      maxWidth: "100%",
    },
  },

  body: {
    paddingRight: `calc(${theme.spacing.xl} * 4)`,
    width: "40%",

    [theme.fn.smallerThan("sm")]: {
      paddingRight: 0,
      marginTop: theme.spacing.xl,
      width: "100%",
    },
  },

  controls: {
    display: "flex",
    marginTop: theme.spacing.xl,
    gap: '15px',
  },

  inputWrapper: {
    width: "100%",
    flex: "1",
  },

  input: {
    borderTopRightRadius: 0,
    borderBottomRightRadius: 0,
    borderRight: 0,
  },

  control: {
  },
}));

export function EmailBanner() {
  const { classes } = useStyles();
  return (
    <div className={classes.wrapper}>
      <Flex justify="center" align="center">
      <div className={classes.body}>
        <h1>Cognipedia <span>Tools for<br />
        thought</span></h1>
        <Text fz="md" c="dimmed" mt={4}>
        Think, collaborate and understand other view points by supporting your discussion with Cognipedia.
        </Text>

        <div className={classes.controls}>
          <Button color="#4f46e5" size="lg">Create a Cogni</Button>
          <Button color="gray" size="lg">Browse Cognis</Button>
        </div>
      </div>
      <iframe src="/public/nodes.svg"></iframe>
      </Flex>
    </div>
  );
}
