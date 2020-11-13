import { Box, Flex } from "rebass";

export const Header = () => {
  const navLinks = [
    { title: "Sign-Up", url: "/signup" },
    { title: "Login", url: "/login" },
    { title: "LOADED", url: "/premium" },
  ];
  return (
    <Box
      sx={{
        width: "300px",
        position: "fixed",
        right: 0,
        top: 10,
        zIndex: 60
      }}
    >
      <Flex flexDirection="row" justifyContent="space-around">
        {navLinks.map((x, i) => (
          <Box
            sx={{
              background: i === navLinks.length - 1 && "yellow",
              p: 2,
              fontWeight: i === navLinks.length - 1 ? "bolder" : "bold",
              color: i === navLinks.length - 1 ? "black" : "ghostwhite",
              transition: 'all 100ms ease-in-out',
              ":hover": {
                boxShadow:
                  i === navLinks.length - 1
                    ? "5px 5px 10px rgba(0.1,0.1,0.1,0.6)"
                    : "none",
                cursor: 'pointer',
                transform: i < navLinks.length - 1  ? 'scale(1.05)' :  'scale(1.1)',
                color: i < navLinks.length - 1 ? 'white' : 'violet'
              },
            }}
          >
            {x.title}
          </Box>
        ))}
      </Flex>
    </Box>
  );
};
