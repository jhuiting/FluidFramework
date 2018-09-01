import { core as api } from "@prague/client-api";

export class TestDocumentDeltaConnection implements api.IDocumentDeltaConnection {

    constructor(
        public documentId: string,
        public clientId: string,
        public existing: boolean,
        public parentBranch: string,
        public user: api.ITenantUser,
        public initialMessages: api.ISequencedDocumentMessage[] | undefined) {
    }

    /**
     * Subscribe to events emitted by the document
     */
    public on(event: string, listener: (...args: any[]) => void): this {
        return this;
    }

    /**
     * Submits a new delta operation to the server
     */
    public submit(message: api.IDocumentMessage): void {
        return;
    }

    public disconnect() {
        return;
    }
}
