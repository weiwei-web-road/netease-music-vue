export interface IAlbumDetail {
    id: number;
    alg: string;
    copywriter: string;
    createTime: number;
    creator: {
        mutual: boolean;
        remarkName: string;
        detailDescription: string;
        defaultAvatar: boolean;
        avatarUrl: string;
        backgroundUrl: string;
    };
    name: string;
    picUrl: string;
    playcount: number;
    trackCount: number;
    type: number;
}