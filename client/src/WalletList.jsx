import React, { useState, useEffect } from "react";

export const WalletList = ({ wallets }) => {
  const [favorites, setFavorites] = useState([]);
  const [sortedWallets, setSortedWallets] = useState(wallets);

  // Order the wallets by favorite and date of first transaction
  useEffect(() => {
    const favoriteSet = new Set(favorites);
    const sorted = wallets.sort((a, b) => {
      const aIsFavorite = favoriteSet.has(a);
      const bIsFavorite = favoriteSet.has(b);
      if (aIsFavorite && !bIsFavorite) {
        return -1;
      } else if (!aIsFavorite && bIsFavorite) {
        return 1;
      } else {
        return b.firstTransactionDate - a.firstTransactionDate;
      }
    });
    setSortedWallets(sorted);
  }, [wallets, favorites]);

  // Toggle a wallet's favorite status
  const toggleFavorite = (wallet) => {
    const index = favorites.indexOf(wallet);
    if (index === -1) {
      setFavorites([...favorites, wallet]);
    } else {
      const newFavorites = [...favorites];
      newFavorites.splice(index, 1);
      setFavorites(newFavorites);
    }
  };

  return (
    <ul>
      {sortedWallets.map((wallet) => (
        <li key={wallet.address}>
          <span>{wallet.address}</span>
          <button onClick={() => toggleFavorite(wallet)}>
            {favorites.includes(wallet) ? "Unfavorite" : "Favorite"}
          </button>
        </li>
      ))}
    </ul>
  );
}
