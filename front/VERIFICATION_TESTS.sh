#!/bin/bash

# 🧪 TESTS DE VÉRIFICATION - SMART-ÉCONOMIE FRONTEND
# ===================================================

echo "╔═══════════════════════════════════════════════════════════════╗"
echo "║   🧪 CHECKLIST DE VÉRIFICATION DU PROJET                    ║"
echo "╚═══════════════════════════════════════════════════════════════╝"
echo ""

# Couleurs
GREEN='\033[0;32m'
RED='\033[0;31m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Compteurs
PASSED=0
FAILED=0

# Fonction pour tester un fichier
test_file() {
    if [ -f "$1" ]; then
        echo -e "${GREEN}✓${NC} Fichier existe: $1"
        ((PASSED++))
    else
        echo -e "${RED}✗${NC} Fichier manquant: $1"
        ((FAILED++))
    fi
}

# Fonction pour tester un dossier
test_folder() {
    if [ -d "$1" ]; then
        echo -e "${GREEN}✓${NC} Dossier existe: $1"
        ((PASSED++))
    else
        echo -e "${RED}✗${NC} Dossier manquant: $1"
        ((FAILED++))
    fi
}

echo "📁 VÉRIFICATION DES DOSSIERS"
echo "═══════════════════════════════════════════════════════════════"
test_folder "front/src/app"
test_folder "front/src/app/pages"
test_folder "front/src/app/forms"
test_folder "front/src/app/components"
test_folder "front/src/app/components/layout"
test_folder "front/src/app/utils"
echo ""

echo "📄 VÉRIFICATION DES PAGES"
echo "═══════════════════════════════════════════════════════════════"
test_file "front/src/app/pages/Home.tsx"
test_file "front/src/app/pages/About.tsx"
test_file "front/src/app/pages/Subscription.tsx"
test_file "front/src/app/pages/Claims.tsx"
test_file "front/src/app/pages/Contact.tsx"
test_file "front/src/app/pages/History.tsx"
test_file "front/src/app/pages/AdvancedExample.tsx"
test_file "front/src/app/pages/index.ts"
echo ""

echo "🎯 VÉRIFICATION DES COMPOSANTS"
echo "═══════════════════════════════════════════════════════════════"
test_file "front/src/app/components/layout/Header.tsx"
test_file "front/src/app/components/layout/Footer.tsx"
test_file "front/src/app/forms/FormComponents.tsx"
test_file "front/src/app/forms/index.ts"
echo ""

echo "⚙️ VÉRIFICATION DES FICHIERS DE CONFIGURATION"
echo "═══════════════════════════════════════════════════════════════"
test_file "front/src/app/App.tsx"
test_file "front/src/app/constants.ts"
test_file "front/src/app/utils/helpers.ts"
echo ""

echo "📚 VÉRIFICATION DE LA DOCUMENTATION"
echo "═══════════════════════════════════════════════════════════════"
test_file "front/PROJECT_STRUCTURE.md"
test_file "front/DEVELOPMENT_GUIDE.md"
test_file "front/SETUP_COMPLETE.md"
test_file "front/DEVELOPMENT_CHECKLIST.md"
test_file "front/STRUCTURE_SUMMARY.md"
test_file "front/FILES_INDEX.md"
echo ""

echo "🧪 VÉRIFICATION DES SCRIPTS"
echo "═══════════════════════════════════════════════════════════════"
test_file "front/setup.sh"
test_file "SETUP_SUMMARY.sh"
echo ""

echo "╔═══════════════════════════════════════════════════════════════╗"
echo "║           📊 RÉSULTATS                                        ║"
echo "╚═══════════════════════════════════════════════════════════════╝"
echo ""
echo -e "${GREEN}✓ Tests réussis:${NC} $PASSED"
echo -e "${RED}✗ Tests échoués:${NC} $FAILED"
echo ""

if [ $FAILED -eq 0 ]; then
    echo -e "${GREEN}✅ TOUS LES FICHIERS SONT PRÉSENTS!${NC}"
    echo ""
    echo "🚀 Prochaines étapes:"
    echo "   1. cd front"
    echo "   2. npm install"
    echo "   3. npm run dev"
    echo ""
else
    echo -e "${RED}❌ CERTAINS FICHIERS SONT MANQUANTS${NC}"
    echo ""
    echo "Veuillez créer les fichiers manquants ou contacter l'équipe"
    echo ""
fi

echo "═══════════════════════════════════════════════════════════════"
echo "Test réalisé le: $(date)"
echo "═══════════════════════════════════════════════════════════════"
