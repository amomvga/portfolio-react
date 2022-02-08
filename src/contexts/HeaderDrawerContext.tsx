// import { useDisclosure, UseDisclosureReturn } from "@chakra-ui/react";
// import { useRouter } from "next/router";
// import { createContext, ReactNode, useContext, useEffect } from "react";

// interface HeaderDrawerProviderProps {
//   children: ReactNode;
// }

// type HeaderDrawerContextData = UseDisclosureReturn;

// const HeaderDrawerContext = createContext({} as HeaderDrawerContextData);

// export function HeaderDrawerProvider({ children }: HeaderDrawerProviderProps) {
//   const disclosure = useDisclosure();
//   const router = useRouter();

//   useEffect(() => {
//     disclosure.onClose();
//   }, [router.asPath]);

//   return (
//     <HeaderDrawerContext.Provider value={disclosure}>
//       {children}
//     </HeaderDrawerContext.Provider>
//   );
// }

// export const useHeaderDrawer = () => useContext(HeaderDrawerContext);
