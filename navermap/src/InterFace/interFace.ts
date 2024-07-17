export interface IIntro {
  intro: {
    storeName: string;
    storePoint: number;
    storeIntro: string;
    storeStar: number;
    storePFImg: string;
    sellCount: number;
    loginCheck: boolean;
  };
}

export interface IMyStoreRes {
  store: {
    nick: string;
    point: number;
    Introduction: string;
    reviewId: { star: number };
    profileimg: string;
    sellCount: number;
  };
  loginuser: boolean;
}

export const getClip = (value: number): string => {
  switch (value) {
    case 0.0:
      return "clip-inset-0";
    case 0.1:
      return "clip-inset-1";
    case 0.2:
      return "clip-inset-2";
    case 0.3:
      return "clip-inset-3";
    case 0.4:
      return "clip-inset-4";
    case 0.5:
      return "clip-inset-5";
    case 0.6:
      return "clip-inset-6";
    case 0.7:
      return "clip-inset-7";
    case 0.8:
      return "clip-inset-8";
    case 0.9:
      return "clip-inset-9";
    case 1.0:
      return "clip-inset-10";
    case 1.1:
      return "clip-inset-11";
    case 1.2:
      return "clip-inset-12";
    case 1.3:
      return "clip-inset-13";
    case 1.4:
      return "clip-inset-14";
    case 1.5:
      return "clip-inset-15";
    case 1.6:
      return "clip-inset-16";
    case 1.7:
      return "clip-inset-17";
    case 1.8:
      return "clip-inset-18";
    case 1.9:
      return "clip-inset-19";
    case 2.0:
      return "clip-inset-20";
    case 2.1:
      return "clip-inset-21";
    case 2.2:
      return "clip-inset-22";
    case 2.3:
      return "clip-inset-23";
    case 2.4:
      return "clip-inset-24";
    case 2.5:
      return "clip-inset-25";
    case 2.6:
      return "clip-inset-26";
    case 2.7:
      return "clip-inset-27";
    case 2.8:
      return "clip-inset-28";
    case 2.9:
      return "clip-inset-29";
    case 3.0:
      return "clip-inset-30";
    case 3.1:
      return "clip-inset-31";
    case 3.2:
      return "clip-inset-32";
    case 3.3:
      return "clip-inset-33";
    case 3.4:
      return "clip-inset-34";
    case 3.5:
      return "clip-inset-35";
    case 3.6:
      return "clip-inset-36";
    case 3.7:
      return "clip-inset-37";
    case 3.8:
      return "clip-inset-38";
    case 3.9:
      return "clip-inset-39";
    case 4.0:
      return "clip-inset-40";
    case 4.1:
      return "clip-inset-41";
    case 4.2:
      return "clip-inset-42";
    case 4.3:
      return "clip-inset-43";
    case 4.4:
      return "clip-inset-44";
    case 4.5:
      return "clip-inset-45";
    case 4.6:
      return "clip-inset-46";
    case 4.7:
      return "clip-inset-47";
    case 4.8:
      return "clip-inset-48";
    case 4.9:
      return "clip-inset-49";
    case 5.0:
      return "clip-inset-50";

    default:
      return "clip-inset-0";
  }
};
