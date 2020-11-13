import { useEffect, useRef, useState } from "react";
import { Box, Flex } from "rebass";
import { useRouter} from 'next/router'

export const TheOptions = ({opts, setOpts}) => {


  const router = useRouter()
  const ref = useRef();

  useEffect(() => {
    let k = [...opts]
    let str = k.sort().join('')
    router.push({
        pathname: '/',
        query: { opt: router && str },
        option: {
            shallow: true
        }
      })
  },[opts])

  const runOne = () => {
    let k = [...opts];
    k && !k.includes(0) && k.push(0)
    setOpts(k)
 
  };

  const labelChecks = (i) => {
    let k = [...opts];
    k.includes(i) ? k.splice(k.indexOf(i), 1) : k.push(i);
    setOpts(k);
  };

  const checkID = (i) => {
    let k = [...opts];
    return k.includes(i) ? true : false;
  };
  const list = [
      "",
    "b&w only",
    "point movement",
  ];
  return (
    <Flex justifyContent="center" flexDirection="column" flexWrap="wrap">
      <h3
        style={{
          textDecoration: "underline",
        }}
      >
        options
      </h3>
      chosen: {opts.map((x) => x)}
      {list.map((x, i) => (
        <Box
          key={i + "h"}
          mx={3}
          sx={{
            alignItems: "center",
          }}
        >
          <Box
            as="label"
           
            key={i}
            onClick={i > 0 ? () => labelChecks(i) : () => runOne()}
            sx={{
              fontSize: "1.5rem",
              fontWeight: "bolder",
              color: opts.includes(i) ? "inherit" : "pink",
              cursor: "pointer",
              ":hover": {
                color: opts.includes(i) ? "darkpink" : "inherit",
              },
            }}
            htmlFor="checkbox"
          >
            {x}
          </Box>
        </Box>
      ))}
    </Flex>
  );
};
