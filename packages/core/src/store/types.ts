import { KeyChain } from "../keys"
import { Wallet } from "../wallet/types"


export type BasicStore = {
  alias: string
  name: string
  comment?: string
}

export type EncryptedStore = BasicStore & {
  dataChunks?: string[]
}

export type SecureStore = BasicStore & {
  data?: Wallet
}