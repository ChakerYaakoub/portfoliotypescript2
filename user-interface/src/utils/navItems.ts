// navItems.ts

// navItemsEnum.ts
// the enum have to be like this : CollectionName = "good href value" 
// later on try to use the same names CollectionName name and href value where you initialise  of the project
export enum NavItemsEnum {
  UserInfo = "home",
  WorkspaceDescriptions = "overview",
  Skills = "skills",
  WorkingPeriods = "timeline",
  AboutUs = "about",
  Services = "services",
  ContactUs = "contact",
}

export const navItems = [
  { href: "#home", text: NavItemsEnum.UserInfo },
  { href: "#overview", text: NavItemsEnum.WorkspaceDescriptions },
  { href: "#skills", text: NavItemsEnum.Skills },
  { href: "#timeline", text: NavItemsEnum.WorkingPeriods },
  { href: "#about", text: NavItemsEnum.AboutUs },
  { href: "#services", text: NavItemsEnum.Services },
  { href: "#contact", text: NavItemsEnum.ContactUs },
];
