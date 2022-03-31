export interface IVariable {
  rawValue: string,
  parsed: string,
  colored?: string,
  type?: string
  options?: IVariableOption[]
}

export interface IVariableOption {
  [p: string]: any
}

