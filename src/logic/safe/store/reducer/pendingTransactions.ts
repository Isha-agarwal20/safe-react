import { Action, handleActions } from 'redux-actions'

import session from 'src/utils/storage/session'
import { PENDING_TRANSACTIONS_ACTIONS } from 'src/logic/safe/store/actions/pendingTransactions'
import { ChainId } from 'src/config/chain.d'
import { _getChainId } from 'src/config'

export const PENDING_TRANSACTIONS_ID = 'pendingTransactions'

type SafeTxHash = string
export type PendingTransactionsState = Record<ChainId, Record<SafeTxHash, boolean>>

const initialPendingTxsState = session.getItem<PendingTransactionsState>(PENDING_TRANSACTIONS_ID) || {}

export type PendingTransactionPayload = {
  safeTxHash: string
  isBroadcast?: boolean
}

export const pendingTransactionsReducer = handleActions<PendingTransactionsState, PendingTransactionPayload>(
  {
    [PENDING_TRANSACTIONS_ACTIONS.ADD]: (
      state: PendingTransactionsState,
      action: Action<PendingTransactionPayload>,
    ) => {
      const chainId = _getChainId()
      const { safeTxHash } = action.payload

      return {
        ...state,
        [chainId]: { ...state[chainId], [safeTxHash]: true },
      }
    },
    [PENDING_TRANSACTIONS_ACTIONS.REMOVE]: (
      state: PendingTransactionsState,
      action: Action<PendingTransactionPayload>,
    ) => {
      const chainId = _getChainId()
      const { safeTxHash } = action.payload

      // Omit safeTxHash from the pending transactions on current chain
      const { [safeTxHash]: _, ...newChainState } = state[chainId] || {}

      return {
        ...state,
        [chainId]: newChainState,
      }
    },
  },
  initialPendingTxsState,
)
