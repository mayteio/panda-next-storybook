import { Box } from "../components/layout";
import { Button } from "../components/button";
import { Heading } from "../components/typography/heading";
import { TextField } from "../components/text-field";

export default function Index() {
  return (
    <Box m={4} p={6} border="1px solid" borderColor="light" borderRadius="md">
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
