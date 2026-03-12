import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Sparkles, 
  Search, 
  Filter, 
  LayoutGrid, 
  List, 
  Play, 
  RefreshCw,
  Zap,
  MousePointer2,
  Maximize2,
  Activity,
  MessageSquare
} from 'lucide-react';
import { motionSystems, MotionSystem } from './AdvancedMotionData';
import { CodePanel } from '../code-preview/CodePanel';

export function AdvancedMotionLab() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedType, setSelectedType] = useState<MotionSystem['type'] | 'all'>('all');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [selectedSystem, setSelectedSystem] = useState<MotionSystem | null>(null);
  const [refreshKey, setRefreshKey] = useState(0);

  const filteredSystems = useMemo(() => {
    return motionSystems.filter(system => {
      const matchesSearch = system.label.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          system.description.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesType = selectedType === 'all' || system.type === selectedType;
      return matchesSearch && matchesType;
    });
  }, [searchQuery, selectedType]);

  const handleRefresh = () => setRefreshKey(prev => prev + 1);

  const getTypeIcon = (type: MotionSystem['type']) => {
    switch (type) {
      case 'entrance': return <Zap size={14} />;
      case 'hover': return <MousePointer2 size={14} />;
      case 'layout': return <LayoutGrid size={14} />;
      case 'continuous': return <Activity size={14} />;
      case 'feedback': return <MessageSquare size={14} />;
    }
  };

  const getTypeLabel = (type: MotionSystem['type']) => {
    switch (type) {
      case 'entrance': return 'כניסה';
      case 'hover': return 'ריחוף';
      case 'layout': return 'פריסה';
      case 'continuous': return 'רציף';
      case 'feedback': return 'משוב';
    }
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary shadow-inner">
            <Sparkles size={24} />
          </div>
          <div>
            <h2 className="text-3xl font-bold tracking-tight">מערכות תנועה מתקדמות</h2>
            <p className="text-muted-foreground">100 וריאציות של תנועה חכמה לממשקי פרימיום.</p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <button 
            onClick={handleRefresh}
            className="p-2 rounded-xl bg-muted hover:bg-muted/80 text-muted-foreground transition-colors"
            title="רענן אנימציות"
          >
            <RefreshCw size={20} />
          </button>
          <div className="flex bg-muted p-1 rounded-xl">
            <button 
              onClick={() => setViewMode('grid')}
              className={`p-2 rounded-lg transition-all ${viewMode === 'grid' ? 'bg-background shadow-sm text-primary' : 'text-muted-foreground'}`}
            >
              <LayoutGrid size={18} />
            </button>
            <button 
              onClick={() => setViewMode('list')}
              className={`p-2 rounded-lg transition-all ${viewMode === 'list' ? 'bg-background shadow-sm text-primary' : 'text-muted-foreground'}`}
            >
              <List size={18} />
            </button>
          </div>
        </div>
      </div>

      {/* Filters */}
      <div className="flex flex-col md:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={18} />
          <input 
            type="text"
            placeholder="חפש מערכת תנועה..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pr-10 pl-4 py-2.5 bg-muted/50 border border-border/50 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
          />
        </div>
        <div className="flex gap-2 overflow-x-auto pb-2 md:pb-0 no-scrollbar">
          {(['all', 'entrance', 'hover', 'layout', 'continuous', 'feedback'] as const).map(type => (
            <button
              key={type}
              onClick={() => setSelectedType(type)}
              className={`px-4 py-2 rounded-xl text-sm font-medium whitespace-nowrap transition-all border ${
                selectedType === type 
                ? 'bg-primary text-primary-foreground border-primary shadow-lg shadow-primary/20' 
                : 'bg-muted/50 text-muted-foreground border-border/50 hover:bg-muted'
              }`}
            >
              {type === 'all' ? 'הכל' : getTypeLabel(type)}
            </button>
          ))}
        </div>
      </div>

      {/* Gallery */}
      <div className={viewMode === 'grid' ? 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4' : 'space-y-3'}>
        <AnimatePresence mode="popLayout">
          {filteredSystems.map((system) => (
            <motion.div
              key={`${system.id}-${refreshKey}`}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              whileHover={{ y: -4 }}
              onClick={() => setSelectedSystem(system)}
              className={`group relative overflow-hidden glass-panel rounded-2xl p-5 cursor-pointer border border-border/50 hover:border-primary/50 transition-all duration-300 ${
                viewMode === 'list' ? 'flex items-center gap-6 py-4' : ''
              }`}
            >
              <div className={`w-12 h-12 rounded-xl ${system.color || 'bg-primary'} bg-opacity-10 flex items-center justify-center text-primary mb-4 group-hover:scale-110 transition-transform ${viewMode === 'list' ? 'mb-0 shrink-0' : ''}`}>
                {getTypeIcon(system.type)}
              </div>
              
              <div className="flex-1">
                <div className="flex items-center justify-between mb-1">
                  <h3 className="font-bold text-lg">{system.label}</h3>
                  <span className="text-[10px] uppercase tracking-wider font-bold px-2 py-0.5 rounded-full bg-muted text-muted-foreground">
                    {getTypeLabel(system.type)}
                  </span>
                </div>
                <p className="text-xs text-muted-foreground line-clamp-2">{system.description}</p>
              </div>

              {/* Preview Area */}
              <div className={`mt-4 h-32 rounded-xl bg-muted/30 border border-border/50 flex items-center justify-center overflow-hidden relative ${viewMode === 'list' ? 'hidden' : ''}`}>
                <motion.div
                  variants={system.variants}
                  initial="initial"
                  animate="animate"
                  whileHover="hover"
                  whileTap="tap"
                  className={`w-12 h-12 rounded-lg ${system.color || 'bg-primary'} shadow-lg`}
                />
                <div className="absolute bottom-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  <Play size={12} className="text-muted-foreground" />
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* Modal / Detail View */}
      <AnimatePresence>
        {selectedSystem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/80 backdrop-blur-md"
            onClick={() => setSelectedSystem(null)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="bg-card border border-border rounded-3xl p-8 w-full max-w-2xl shadow-2xl relative overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Background Decoration */}
              <div className={`absolute -top-24 -right-24 w-64 h-64 rounded-full ${selectedSystem.color || 'bg-primary'} opacity-5 blur-3xl`} />
              
              <div className="flex justify-between items-start mb-8 relative">
                <div className="flex items-center gap-4">
                  <div className={`w-16 h-16 rounded-2xl ${selectedSystem.color || 'bg-primary'} bg-opacity-10 flex items-center justify-center text-primary`}>
                    {getTypeIcon(selectedSystem.type)}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold">{selectedSystem.label}</h3>
                    <p className="text-muted-foreground">{selectedSystem.description}</p>
                  </div>
                </div>
                <button 
                  onClick={() => setSelectedSystem(null)}
                  className="p-2 rounded-full bg-muted text-muted-foreground hover:text-foreground transition-colors"
                >
                  <Maximize2 size={20} className="rotate-45" />
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Live Preview */}
                <div className="space-y-4">
                  <h4 className="text-sm font-bold uppercase tracking-widest text-muted-foreground">תצוגה חיה</h4>
                  <div className="h-64 rounded-2xl bg-muted/30 border border-border/50 flex items-center justify-center relative overflow-hidden group">
                    <motion.div
                      key={refreshKey}
                      variants={selectedSystem.variants}
                      initial="initial"
                      animate="animate"
                      whileHover="hover"
                      whileTap="tap"
                      className={`w-24 h-24 rounded-2xl ${selectedSystem.color || 'bg-primary'} shadow-2xl flex items-center justify-center text-white`}
                    >
                      <Zap size={32} />
                    </motion.div>
                    
                    <button 
                      onClick={handleRefresh}
                      className="absolute bottom-4 right-4 p-2 rounded-lg bg-background/50 backdrop-blur-sm border border-border/50 text-muted-foreground hover:text-primary transition-colors"
                    >
                      <RefreshCw size={16} />
                    </button>
                  </div>
                </div>

                {/* Code Panel */}
                <div className="space-y-4">
                  <h4 className="text-sm font-bold uppercase tracking-widest text-muted-foreground">קוד מקור</h4>
                  <div className="h-64 overflow-y-auto rounded-2xl border border-border/50 custom-scrollbar">
                    <CodePanel 
                      structureCode={`<motion.div\n  variants={variants}\n  initial="initial"\n  animate="animate"\n  whileHover="hover"\n  whileTap="tap"\n/>`}
                      motionCode={JSON.stringify(selectedSystem.variants, null, 2)}
                      styleCode=""
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
