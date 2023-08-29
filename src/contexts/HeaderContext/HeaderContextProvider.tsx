"use client";
import React from "react";
import HeaderContext from "./HeaderContext";
import SubHeadLink, { SubLink } from "@/app/components/commons/SubLink";

interface HeaderContextProviderProps {
  children: React.ReactNode;
  selected: string;
  firstName: string;
  lastName: string;
  setSelected: (value: string) => void;
}

export interface ContainerProps {
  url: string;
  title: string;
}

export const eventContainer: ContainerProps[] = [
  { url: "/events", title: "Events" },
  { url: "/event_group", title: "Event Group" },
  { url: "/voucher", title: "Voucher" },
  { url: "/ticket_type", title: "Ticket Type" },
];

export const performerContainer: ContainerProps[] = [
  { url: "/performer", title: "Performers" },
  { url: "/song", title: "Song" },
  { url: "/genre", title: "Genre" },
];

export const partnerContainer: ContainerProps[] = [
  { url: "/partnership", title: "Partnership" },
  { url: "/production_organization", title: "Production & Organization" },
  { url: "/withdraw", title: "Withdraw" },
];

export const eventTabs: ContainerProps[] = [
  { url: "/info", title: "Info" },
  { url: "/info", title: "Performers" },
  { url: "/info", title: "Tickets" },
  { url: "/info", title: "Brands" },
  { url: "/info", title: "Vouchers" },
  { url: "/info", title: "Orders" },
  { url: "/info", title: "Product" },
  { url: "/info", title: "Product Orders" },
];

export const performerTabs: ContainerProps[] = [
  { url: "/performer", title: "Performer" },
];

export const partnerTabs: ContainerProps[] = [
  { url: "/production", title: "Production" },
  { url: "/organization", title: "Organization" },
];

const HeaderContextProvider = ({
  children,
  setSelected,
  selected,
  firstName,
  lastName,
}: HeaderContextProviderProps) => {
  const [isPageSelected, setIsPageSelected] = React.useState<boolean>();
  const [selectedContainer, setSelectedContainer] = React.useState<string>();
  const handleClick = (name: string) => {
    setSelected(name);
  };

  return (
    <HeaderContext.Provider
      value={{
        isPageSelected,
        selectedContainer,
        setIsPageSelected,
        setSelectedContainer,
      }}
    >
      <SubHeadLink firstName={firstName} lastName={lastName}>
        {!isPageSelected && selectedContainer === "performer"
          ? performerContainer.map(({ url, title }, index) => (
              <React.Fragment key={index}>
                <SubLink
                  url={url}
                  title={title}
                  selected={selected}
                  handleClick={handleClick}
                />
              </React.Fragment>
            ))
          : selectedContainer === "performer" &&
            performerTabs.map(({ url, title }, index) => (
              <React.Fragment key={index}>
                <SubLink
                  url={url}
                  title={title}
                  selected={selected}
                  handleClick={handleClick}
                />
              </React.Fragment>
            ))}
        {!isPageSelected && selectedContainer === "event"
          ? eventContainer.map(({ url, title }, index) => (
              <React.Fragment key={index}>
                <SubLink
                  url={url}
                  title={title}
                  selected={selected}
                  handleClick={handleClick}
                />
              </React.Fragment>
            ))
          : selectedContainer === "event" &&
            eventTabs.map(({ url, title }, index) => (
              <React.Fragment key={index}>
                <SubLink
                  url={url}
                  title={title}
                  selected={selected}
                  handleClick={handleClick}
                />
              </React.Fragment>
            ))}
        {!isPageSelected && selectedContainer === "partnership"
          ? partnerContainer.map(({ url, title }, index) => (
              <React.Fragment key={index}>
                <SubLink
                  url={url}
                  title={title}
                  selected={selected}
                  handleClick={handleClick}
                />
              </React.Fragment>
            ))
          : selectedContainer === "partnership" &&
            partnerTabs.map(({ url, title }, index) => (
              <React.Fragment key={index}>
                <SubLink
                  url={url}
                  title={title}
                  selected={selected}
                  handleClick={handleClick}
                />
              </React.Fragment>
            ))}
        {!isPageSelected && selectedContainer === "order" && (
          <SubLink
            url="/orders"
            title="Orders"
            selected="Orders"
            handleClick={handleClick}
          />
        )}
        {!isPageSelected && selectedContainer === "user" && (
          <SubLink
            url="/users"
            title="Users"
            selected="Users"
            handleClick={handleClick}
          />
        )}
        {!isPageSelected && selectedContainer === "role" && (
          <SubLink
            url="/role"
            title="Role"
            selected="Role"
            handleClick={handleClick}
          />
        )}
        {!isPageSelected && selectedContainer === "overview" && (
          <SubLink
            url="/"
            title="Overview"
            selected="Overview"
            handleClick={handleClick}
          />
        )}
        {!isPageSelected && selectedContainer === "email-marketing" && (
          <SubLink
            url="/email-marketing"
            title="Email Marketing"
            selected="Email Marketing"
            handleClick={handleClick}
          />
        )}
        {!isPageSelected && selectedContainer === "ticket" && (
          <SubLink
            url="/ticket"
            title="Ticket"
            selected="Ticket"
            handleClick={handleClick}
          />
        )}
        {!isPageSelected && selectedContainer === "conversation" && (
          <SubLink
            url="/conversation"
            title="Conversation"
            selected="Conversation"
            handleClick={handleClick}
          />
        )}
        {!isPageSelected && selectedContainer === "products" && (
          <SubLink
            url="/products"
            title="Products"
            selected="Products"
            handleClick={handleClick}
          />
        )}
      </SubHeadLink>
      {children}
    </HeaderContext.Provider>
  );
};

export default HeaderContextProvider;
