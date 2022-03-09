import react from "react";

import { Header, Nav, Logo, Image } from "./styles";
import { Cont } from "../Container/styles";
import { Button } from "../../styles/button";
import { Flex } from "../../styles/flex";

type Button = {
    bgColor: string;
}

export function HeaderSection() {
  return (
    <Header>
      <Cont>
        <Nav>
          <Logo src="/images/logo.svg" alt="" />
          <Button bgColor='fff'> Try It Free </Button>
        </Nav>
        <Flex>
          <div>
            <h1>Build the Comunnity Your Fans Will Love</h1>

            <p>
              Huddle re-imagines the way we build communities. You have a voice,
              but so does your audience. Create connections with your users as
              you engage in genuine discussion.
            </p>

            <Button bgColor='#ff0099'color='#fff'>
                Get Started for Free    
            </Button>
          </div>

          <Image src="/images/illustration-mockups.svg"></Image>
        </Flex>
      </Cont>
    </Header>
  );
}
