import { Box, Text } from "@chakra-ui/react";
import Link from "next/link";
import Image from "next/image";

interface CardModelProps {
  imgUrl: StaticImageData;
  title: string;
  description: string;
  url?: string;
  urlTitle?: string;
}

export function CardModel({
  imgUrl,
  title,
  description,
  url,
  urlTitle,
}: CardModelProps) {
  return (
    <Box
      maxW="380px"
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      m="2"
      flexDirection="column"
      alignItems="center"
      display="flex"
      h="100%"
    >
      <Image width={304} height={400} src={imgUrl} />

      <Box p="6">
        <Box
          mt="-5"
          fontWeight="semibold"
          as="h4"
          lineHeight="tight"
          isTruncated
        >
          {title}
        </Box>
        <Box>
          <Text mt="5">{description}</Text>
        </Box>
        {!!url && (
          <Box mt="5">
            <Link href={url}>{urlTitle}</Link>
          </Box>
        )}
      </Box>
    </Box>
  );
}
