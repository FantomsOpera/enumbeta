export const fantomPools = [
  /*{
    id: 'xenum',
    logo: 'enum.svg',
    name: 'xENUM',
    token: 'ENUM',
    tokenDescription: 'Enum single-stake',
    tokenAddress: '0x098Bf796E582025AC4ba5ef3F2A5B3c2460356d8',
    tokenDecimals: 18,
    tokenDescriptionUrl: '#',
    earnedToken: 'xENUM',
    earnedTokenAddress: '0x098Bf796E582025AC4ba5ef3F2A5B3c2460356d8',
    earnContractAddress: '0xbF07093ccd6adFC3dEB259C557b61E94c1F66945',
    pricePerFullShare: 1,
    tvl: 0,
    oracle: 'tokens',
    oracleId: 'ENUM',
    oraclePrice: 0,
    depositsPaused: false,
    status: 'active',
    platform: 'Native Enum',
    assets: ['ENUM'],
    risks: [
      'COMPLEXITY_LOW',
      'BATTLE_TESTED',
      'IL_NONE',
      'MCAP_MEDIUM',
      'CONTRACTS_VERIFIED',
    ],
    stratType: 'Stake',
    withdrawalFee: '0.05%',
    buyTokenUrl:
      'https://spookyswap.finance/swap?outputCurrency=0xd6070ae98b8069de6B494332d1A1a81B6179D960',
  },*/
  {
    id: 'spirit-ftm-dai',
    name: 'DAI-USDC SpiritSwap LP',
    token: 'DAI-USDC SLP',
    tokenDescription: 'SpiritSwap - No boost',
    tokenAddress: '0x9606D683d03f012DDa296eF0ae9261207C4A5847',
    tokenDecimals: 18,
    tokenDescriptionUrl: '#',
    earnedToken: 'enumV1-DAI-USDC',
    earnedTokenAddress: '0x6Ba5Ce4B2bdA49704124c84d0B8b24e45E5F3f2e',
    earnContractAddress: '0x6Ba5Ce4B2bdA49704124c84d0B8b24e45E5F3f2e',
    strategy: '0xA4ab97D1e31590D4742F639cFcfA60d9981ad98A',
    pricePerFullShare: 1,
    tvl: 0,
    oracle: 'lps',
    oracleId: 'spirit-ftm-dai',
    oraclePrice: 0,
    depositsPaused: false,
    status: 'active',
    platform: 'SpiritSwap',
    assets: ['DAI', 'USDC'],
    risks: [
      'COMPLEXITY_LOW',
      'BATTLE_TESTED',
      'IL_LOW',
      'MCAP_LARGE',
      'AUDIT',
      'CONTRACTS_VERIFIED',
    ],
    stratType: 'StratLP',
    withdrawalFee: '0%',
    addLiquidityUrl:
      'https://swap.spiritswap.finance/#/add/0x04068DA6C83AFCFA0e13ba15A6696662335D5B75/0x8D11eC38a3EB5E956B052f67Da8Bdc9bef8Abf3E',
    buyTokenUrl:
      'https://swap.spiritswap.finance/#/exchange/swap/FTM/0x04068DA6C83AFCFA0e13ba15A6696662335D5B75',
  },

  {
    id: 'boo-boo-ftm',
    name: 'FTM-BOO SpookySwap LP',
    token: 'FTM-BOO SLP',
    tokenDescription: 'SpookySwap',
    tokenAddress: '0xEc7178F4C41f346b2721907F5cF7628E388A7a58',
    tokenDecimals: 18,
    tokenDescriptionUrl: '#',
    earnedToken: 'enumV1-FTM-BOO',
    earnedTokenAddress: '0x098249afEe958bA5705B37905a0c347Bd93C2B69',
    earnContractAddress: '0x098249afEe958bA5705B37905a0c347Bd93C2B69',
    strategy: '0xA4ab97D1e31590D4742F639cFcfA60d9981ad98A',
    pricePerFullShare: 1,
    tvl: 0,
    oracle: 'lps',
    oracleId: 'boo-boo-ftm',
    oraclePrice: 0,
    depositsPaused: false,
    status: 'active',
    platform: 'SpookySwap',
    assets: ['FTM', 'BOO'],
    risks: [
      'COMPLEXITY_LOW',
      'BATTLE_TESTED',
      'IL_LOW',
      'MCAP_LARGE',
      'AUDIT',
      'CONTRACTS_VERIFIED',
    ],
    stratType: 'StratLP',
    withdrawalFee: '0%',
    addLiquidityUrl:
      'https://swap.spiritswap.finance/#/add/FTM/0x8D11eC38a3EB5E956B052f67Da8Bdc9bef8Abf3E',
    buyTokenUrl:
      'https://swap.spiritswap.finance/#/exchange/swap/FTM/0x8D11eC38a3EB5E956B052f67Da8Bdc9bef8Abf3E',
  },
];
