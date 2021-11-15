{
  description = "Exercises of the book 'Eloquent Javascript'";

  inputs = {
    nixpkgs.url = "github:NixOS/nixpkgs";
  };

  outputs = { self, nixpkgs, ... }:
  let
    system = "x86_64-linux";
    pkgs = import nixpkgs { inherit system; };
  in with pkgs;
  {
    devShell.${system} = mkShell {
      nativeBuildInputs = [
        nodePackages.npm
        nodejs-17_x
      ];
    };
  };
}
