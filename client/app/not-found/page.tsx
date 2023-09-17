"use client"

import { PageHeader } from "@/components/nav-header";
import { Text } from "@chakra-ui/react";

export default function Custom404() {
    return (
      <>
        <PageHeader path="/not-found" />
        <Text color={'white'} fontWeight={'bold'} textAlign={'center'} fontSize={'3xl'} mt={10}>Not Found. Use company's ticker symbol (ex. AAPL for Apple).</Text>
      </>
    )
  }
  