#!/bin/bash
# Run this to serve the case study locally
# Access at http://localhost:4000
cd "$(dirname "$0")"
echo "Case study running at http://localhost:4000"
npx serve -l 4000 .
