function Blockchain() {
    this.chain = [];
    this.newTransactions = [];
}

Blockchain.prototype.createNewBlock = function (nonce, previousBlockHash, hash) {
    // 새 블록 교체
    const newBlock = {
        index: this.chain.length + 1,
        timestamp: Date.now(),
        transactions: this.newTransactions,
        nonce: nonce,
        hash: hash,
        previousBlockHash: previousBlockHash,
    };

    // 다음 거래를 위한 거래내역 배열 비워주고
    this.newTransactions = [];
    this.chain.push(newBlock);

    return newBlock;
}