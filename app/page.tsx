import { Box } from "../components/layout";
import { Button } from "../components/button";
import { Heading } from "../components/typography/heading";
import { TextField } from "../components/text-field";
import { css } from "@/styled-system/css";

export default function Index() {
  return (
    <Box
      m={4}
      p={6}
      // this works
      borderColor="light"
      border="1px solid"
      borderRadius="md"
    >
      <div
        className={css({
          m: 4,
          p: 6,
          // this doesn't work either
          border: "1px solid token(light)",
        })}
      >
        I should get a border
      </div>
      <Heading mb="24px">Hello panda 🐼!</Heading>
      <TextField
        mb="24px"
        label="Example text field"
        placeholder="Click to type..."
      />
      <Button>Click me!</Button>
    </Box>
  );
}
