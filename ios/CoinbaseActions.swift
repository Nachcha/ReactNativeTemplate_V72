//
//  CoinbaseActions.swift
//  ReactNative7App
//
//  Created by PASINDU RUPASINGHE on 2024-02-01.
//

import Foundation
import CoinbaseWalletSDK
@available(iOS 13.0, *)
class CoinbaseActions:ObservableObject{
  @Published var ethAddress = ""
  func connectToCoinbase() async throws{
    if !CoinbaseWalletSDK.isConfigured{
      print("CoinbaseSDK Configured");
      CoinbaseWalletSDK.configure(callback: URL(string: "coinbaseaction://")!
      )
    }
    let cbwallet = CoinbaseWalletSDK.shared
    cbwallet.resetSession()
    cbwallet.initiateHandshake(
        initialActions: [
            Action(jsonRpc: .eth_requestAccounts)
        ]
    ) { result, account in
      print("CoinbaseSDK result",result);
        switch result {
        case .success(let response):
            guard let account = account else { return }
          print("CoinbaseSDK Success",response);
//            self.address = account.address
        case .failure(let error):
          print("CoinbaseSDK Failed",error);
//            self.log("\(error)")
        }
//        self.updateSessionStatus()
    }
  }
  
  func application(_ app: UIApplication, open url: URL) -> Bool {
      if (try? CoinbaseWalletSDK.shared.handleResponse(url)) == true {
          return true
      }
      // handle other types of deep links
      return false
  }
}
