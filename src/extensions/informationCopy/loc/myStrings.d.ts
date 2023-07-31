declare interface IInformationCopyCommandSetStrings {
  Command1: string;
  Command2: string;
}

declare module 'InformationCopyCommandSetStrings' {
  const strings: IInformationCopyCommandSetStrings;
  export = strings;
}
