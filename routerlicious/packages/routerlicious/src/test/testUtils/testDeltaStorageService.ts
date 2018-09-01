import { core as api } from "@prague/client-api";

export class TestDeltaStorageService implements api.IDeltaStorageService {
    public get(
        tenantId: string,
        id: string,
        token: string,
        from?: number,
        to?: number): Promise<api.ISequencedDocumentMessage[]> {

        return new Promise<api.ISequencedDocumentMessage[]>((resolve, reject) => {
            resolve([]);
        });
    }
}
